
package hu.accedo.commons.typography;

import android.graphics.Typeface;
import android.text.Html;
import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.style.ClickableSpan;
import android.text.style.ForegroundColorSpan;
import android.text.style.RelativeSizeSpan;
import android.text.style.UnderlineSpan;

import java.util.ArrayList;

/**
 * TextView Spannable builder, where you can alter the typeface, color, and size of just parts of a given text.
 * If you add 2 strings parts to the builder, and two colors, the first stringpart will get the first, the second part will get the second color.
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class FormattedTextBuilder {
    private ArrayList<String> strings = new ArrayList<String>();
    private ArrayList<Boolean> isUnderLine = new ArrayList<Boolean>();

    private ArrayList<Typeface> typefaces = new ArrayList<Typeface>();
    private ArrayList<Integer> colors = new ArrayList<Integer>();
    private ArrayList<Float> relativesizes = new ArrayList<Float>();

    private ArrayList<ClickableSpan> clickableSpans = new ArrayList<>();

    private String separator;
    private boolean isHtml = true;


    public FormattedTextBuilder addClickableSpan(ClickableSpan... clickableSpans) {
        if (strings != null)
            for (int i = 0; i < clickableSpans.length; i++)
                this.clickableSpans.add(clickableSpans[i]);
        return this;
    }

    /**
     * @param
     * @return
     */
    public FormattedTextBuilder addUnderLine(Boolean... booleans) {
        if (strings != null)
            for (int i = 0; i < booleans.length; i++)
                this.isUnderLine.add(booleans[i]);
        return this;
    }

    /**
     * @param strings the text parts in order, to add to the builder
     * @return
     */
    public FormattedTextBuilder addStrings(String... strings) {
        if (strings != null)
            for (int i = 0; i < strings.length; i++)
                this.strings.add(strings[i]);
        return this;
    }

    /**
     * @param typefaces the typefaces in order, to add to the builder
     * @return
     */
    public FormattedTextBuilder addTypefaces(Typeface... typefaces) {
        if (typefaces != null)
            for (int i = 0; i < typefaces.length; i++)
                this.typefaces.add(typefaces[i]);
        return this;
    }

    /**
     * @param colors the colors in order, to add to the builder
     * @return
     */
    public FormattedTextBuilder addColors(Integer... colors) {
        if (colors != null)
            for (int i = 0; i < colors.length; i++)
                this.colors.add(colors[i]);
        return this;
    }

    /**
     * Example usage: to have a smallLARGEsmall text, you'd need the following relative-sizes: 1f, 2f, .5f
     * Meaning: Normal size, Twice the size of the last block, Half the size of the last block (half the twice = normal size)
     *
     * @param relativesizes the sizes in float percentage, compared to the last part's size.
     * @return
     */
    public FormattedTextBuilder addRelativeSizes(Float... relativesizes) {
        if (relativesizes != null)
            for (int i = 0; i < relativesizes.length; i++)
                this.relativesizes.add(relativesizes[i]);
        return this;
    }

    /**
     * @param separator the separator the builder will put between all of the stringparts.
     * @return
     */
    public FormattedTextBuilder setSeparator(String separator) {
        this.separator = separator;
        return this;
    }

    /**
     * @param isHtml if true, the builder will call Html.fromHtml(string) on each of the stringparts.
     * @return
     */
    public FormattedTextBuilder setHtml(boolean isHtml) {
        this.isHtml = isHtml;
        return this;
    }

    /**
     * @return the formatted text, ready to be placed inside a TextView
     */
    public SpannableStringBuilder getFormattedText() {
        SpannableStringBuilder ssb = new SpannableStringBuilder();
        float proportion = 1f;
        for (int i = 0; i < strings.size(); i++) {
            String string = strings.get(i);

            if (string == null)
                string = "";

            if (separator != null && i != strings.size() - 1)
                string += separator;

            int start = ssb.length();
            ssb.append(isHtml ? Html.fromHtml(string) : string);

            //Size
            if (relativesizes != null && i < relativesizes.size() && relativesizes.get(i) != null) {
                ssb.setSpan(new RelativeSizeSpan(relativesizes.get(i) / proportion), start, ssb.length(), Spanned.SPAN_EXCLUSIVE_INCLUSIVE);
                proportion = relativesizes.get(i);
            }

            //Typeface
            if (typefaces != null && i < typefaces.size() && typefaces.get(i) != null)
                ssb.setSpan(new CustomTypefaceSpan("", typefaces.get(i)), start, ssb.length(), Spanned.SPAN_EXCLUSIVE_INCLUSIVE);

            //Color
            if (colors != null && i < colors.size() && colors.get(i) != null)
                ssb.setSpan(new ForegroundColorSpan(colors.get(i)), start, ssb.length(), Spanned.SPAN_EXCLUSIVE_INCLUSIVE);

            if (isUnderLine != null && i < isUnderLine.size() && isUnderLine.get(i) != null && isUnderLine.get(i))
                ssb.setSpan(new UnderlineSpan(), start, string.endsWith(" ") ? ssb.length() - 1 : ssb.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);

            if (clickableSpans != null && i < clickableSpans.size() && clickableSpans.get(i) != null) {
                ssb.setSpan(clickableSpans.get(i), start, ssb.length(), Spanned.SPAN_EXCLUSIVE_EXCLUSIVE);
            }
        }
        return ssb;
    }
}