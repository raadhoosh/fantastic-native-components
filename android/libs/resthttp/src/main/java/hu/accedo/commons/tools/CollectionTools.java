package hu.accedo.commons.tools;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.SortedMap;
import java.util.SortedSet;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class CollectionTools {
    private CollectionTools(){
    }

    /**
     * @param index the index to check
     * @param list the list to check the index in
     * @return true, if the given index makes senses in the given list
     */
    public static boolean isValidIndex(int index, List list){
        return list!=null && index<list.size() && index>=0;
    }

    /**
     * @param array to search in
     * @param value to search for
     * @return the index of the given value in the given array, or -1 if not found
     */
    public static <T> int linearSearch(T[] array, T value){
        if(array==null || value==null){
            return -1;
        }
        
        int i=0;
        while(i<array.length && !value.equals(array[i])) i++;
        if(i>=array.length){
            i=-1;
        }
        return i;
    }
    
    /**
     * @param list to search in
     * @param value to search for
     * @return the index of the given value in the given list, or -1 if not found
     */
    public static <T> int linearSearch(List<T> list, T value){
        if(list==null || value==null){
            return -1;
        }
        
        int i=0;
        while(i<list.size() && !value.equals(list.get(i))) i++;
        if(i>=list.size()){
            i=-1;
        }
        return i;
    }

    /**
     * @param array to search in
     * @param value to search for
     * @param matcher to use
     * @return the index of the given value in the given array, or -1 if not found
     */
    public static <T1, T2> int linearSearch(T1[] array, T2 value, Matcher<T1, T2> matcher){
        if(array==null || value==null){
            return -1;
        }

        int i=0;
        while(i<array.length && !matcher.matches(array[i], value)) i++;
        if(i>=array.length){
            i=-1;
        }
        return i;
    }

    /**
     * @param list to search in
     * @param value to search for
     * @param matcher to use
     * @return the index of the given value in the given list, or -1 if not found
     */
    public static <T1, T2> int linearSearch(List<T1> list, T2 value, Matcher<T1, T2> matcher){
        if(list==null || value==null){
            return -1;
        }

        int i=0;
        while(i<list.size() && !matcher.matches(list.get(i), value)) i++;
        if(i>=list.size()){
            i=-1;
        }
        return i;
    }

    public static interface Matcher<T1, T2>{
        /**
         * Compares this {@code T1} with the specified {@code T2} and indicates whether they
         * are equal. <p>
         *
         * @param object1 the first {@code T1} to compare with this comparator.
         * @param object2 the second {@code T2} to compare with this comparator.
         * @return boolean {@code true} if specified {@code T1} is the same as this {@code T2}, and {@code false} otherwise.
         */
        public boolean matches(T1 object1, T2 object2);
    }


    // -- Safe unmodifiables --


    /**
     * @param collection
     * @param defaultValue
     * @param <E>
     * @return if (collection!=null) { return Collections.unmodifiableCollection(collection); } else { return defaultValue; }
     */
    public static <E> Collection<E> safeUnmodifiableCollection(Collection<? extends E> collection, Collection<E> defaultValue) {
        if (collection != null) {
            return Collections.unmodifiableCollection(collection);
        }
        return defaultValue;
    }

    /**
     * @param set
     * @param defaultValue
     * @param <E>
     * @return if (set!=null) { return Collections.unmodifiableSet(set); } else { return defaultValue; }
     */
    public static <E> Set<E> safeUnmodifiableSet(Set<? extends E> set, Set<E> defaultValue) {
        if (set != null) {
            return Collections.unmodifiableSet(set);
        }
        return defaultValue;
    }

    /**
     * @param list
     * @param defaultValue
     * @param <E>
     * @return if (list != null) { return Collections.unmodifiableList(list); } else { return defaultValue; }
     */
    public static <E> List<E> safeUnmodifiableList(List<? extends E> list, List<E> defaultValue) {
        if (list != null) {
            return Collections.unmodifiableList(list);
        }
        return defaultValue;
    }

    /**
     * @param map
     * @param defaultValue
     * @param <K>
     * @param <V>
     * @return if (map != null) { return Collections.unmodifiableMap(map); } else { return defaultValue; }
     */
    public static <K, V> Map<K, V> safeUnmodifiableMap(Map<? extends K, ? extends V> map, Map<K, V> defaultValue) {
        if (map != null) {
            return Collections.unmodifiableMap(map);
        }
        return defaultValue;
    }

    /**
     * @param map
     * @param defaultValue
     * @param <K>
     * @param <V>
     * @return if (map != null) { return Collections.unmodifiableSortedMap(map); } else { return defaultValue; }
     */
    public static <K, V> SortedMap<K, V> safeUnmodifiableSortedMap(SortedMap<K, ? extends V> map, SortedMap<K, V> defaultValue) {
        if (map != null) {
            return Collections.unmodifiableSortedMap(map);
        }
        return defaultValue;
    }

    /**
     * @param set
     * @param defaultValue
     * @param <E>
     * @return if (set != null) { return Collections.unmodifiableSortedSet(set); } else { return defaultValue; }
     */
    public static <E> SortedSet<E> safeUnmodifiableSortedSet(SortedSet<E> set, SortedSet<E> defaultValue) {
        if (set != null) {
            return Collections.unmodifiableSortedSet(set);
        }
        return defaultValue;
    }

}
