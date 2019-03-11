package hu.accedo.commons.tools;

import java.util.Arrays;

import hu.accedo.commons.tools.Callback;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
public class Challenges {
    /**
     * Runs the specified action, if all the provided challenges have been passed.
     * If a challenge fails, the chain is broken. The action, and the remaining challenges will not get called.
     *
     * For example: runChallengeList(playMoviesAction, loginChallenge, parentalPinChallenge);
     *
     * @param action The action to run if all challenges are passed
     * @param challenges The list of challenges to run. The list is ordered.
     */
    public static void runChallengeList(final ChallengeAction action, final Challenge... challenges){
        if(challenges!=null && challenges.length>0){
            challenges[0].run(new ChallengeCallback() {
                @Override
                public void challengePassed() {
                    runChallengeList(action, Arrays.copyOfRange(challenges, 1, challenges.length));
                }
                @Override
                public void challengeFailed(Challenge challenge, Object reason) {
                    action.challengeFailed(challenge, reason);
                }
            });
        }else{
            action.allChallengesPassed();
        }
    }

    /**
     * Defines a challenge, that can be used in a challengelist call before running a specific action.
     */
    public static interface Challenge {
        /**
         * @param challengeCallback must be called when the challenge has been passed, optionally can be called if the challenge failed.
         */
        public void run(ChallengeCallback challengeCallback);
    }

    public static interface ChallengeCallback {
        /**
         * Must be called when the challenge has been passed.
         */
        public void challengePassed();

        /**
         * OPTIONAL. Can be used to pass out information to the caller when the challenge fails.
         * @param challenge the challenge that has failed
         * @param reason an arbitrary object holding information about the fail.
         */
        public void challengeFailed(Challenge challenge, Object reason);
    }

    public static abstract class ChallengeAction {
        public abstract void allChallengesPassed();

        /**
         * OPTIONAL. A challenge may pass out information to the caller here, when it fails.
         * @param challenge the challenge that has failed
         * @param reason an arbitrary object holding information about the fail.
         */
        public void challengeFailed(Challenge challenge, Object reason){

        };
    }
}