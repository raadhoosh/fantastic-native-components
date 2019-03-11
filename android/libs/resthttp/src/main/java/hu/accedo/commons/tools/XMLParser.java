package hu.accedo.commons.tools;

import hu.accedo.commons.logging.L;

import java.io.StringReader;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

public class XMLParser {
	public Document getDomElement(String xml) {
		try {
			DocumentBuilder db = DocumentBuilderFactory.newInstance().newDocumentBuilder();
			
			InputSource is = new InputSource();
			is.setCharacterStream(new StringReader(xml));
			
			return db.parse(is);
		} catch (Exception e) {
			L.e(e);
		}
		return null;
	}

	public String getValue(Element item, String str) {
		try{
			NodeList n = item.getElementsByTagName(str);
			return this.getElementValue(n.item(0));
		}catch(Exception e){
			L.e(e);
		}
		return null;
	}

	public final String getElementValue(Node elem) {
		if (elem != null && elem.hasChildNodes())
			for (Node child = elem.getFirstChild(); child != null; child = child.getNextSibling())
				if (child.getNodeType() == Node.TEXT_NODE)
					return child.getNodeValue();
		return null;
	}
}
