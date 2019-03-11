package hu.accedo.commons.tools;

/**
 * Contains mathematical operations not present in java.lang.Math
 *
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class MathExtender {
	/**
	 * Calculates the matematical modulus, a mod b.
	 *
	 * The difference betweena "a % b" (remainder) and "a mod b" is, how they behave for negative numbers.
	 *
	 * -2 mod 5 = 3
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	public static int mod(int a, int b){
		//L.d("a: "+a+" b: "+b+" mod: "+((a % b + b) % b));

		if(b==0)
			return 0;
		
		return (a % b + b) % b;
	}

	/**
	 * Calculates the matematical modulus, a mod b.
	 *
	 * The difference betweena "a % b" (remainder) and "a mod b" is, how they behave for negative numbers.
	 *
	 * -1.5 mod 5 = 3.5
	 *
	 * @param a
	 * @param b
	 * @return
	 */
	public static float mod(float a, float b){
		//L.d("a: "+a+" b: "+b+" mod: "+((a % b + b) % b));
		
		if(b==0)
			return 0;
		
		return (a % b + b) % b;
	}
}
