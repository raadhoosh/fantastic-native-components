package hu.accedo.commons.tools;

import java.util.List;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class StringTools {
    /**
     * Joins the list with the given separator. For example: {"apple", "pear"} joined by "," is "apple,pear"
     * If the list is null or empty, an empty string will be returned.
     * @param list
     * @param separator
     * @return
     */
    public static String join(List<? extends Object> list, String separator){
        StringBuilder stringBuilder = new StringBuilder();
        
        if(list!=null){
            for(int i=0; i<list.size(); i++){
                stringBuilder.append(list.get(i));
                
                if(i<list.size()-1 && separator!=null){
                    stringBuilder.append(separator);
                }
            }
        }
        
        return stringBuilder.toString();
    }
}
