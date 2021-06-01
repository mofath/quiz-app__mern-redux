import ActionType from "../action-types";

const INITIAL_STATE = {
    loading: false,
    error: null,
    quiz: [],
    curIndex: 0,
    score: {},
    selectedAns: null,
};

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ActionType.START_QUIZ:
            return {
                ...state,
                loading: true,
                error: null,
                quiz: []
            };


        case ActionType.START_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                quiz: action.payload.map((quest, idx) => {
                    if (idx === state.curIndex) return {
                        ...quest, answers: quest.answers.sort(() => Math.random() - 0.5)
                    }
                    return quest;
                })
            };


        case ActionType.START_QUIZ_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                quiz: []
            };


        case ActionType.NEXT_QUEST:
            return {
                ...state,
                curIndex: state.curIndex + 1,
                quiz: state.quiz.map((quest, idx) => {
                    if (idx === state.curIndex + 1)
                        return {
                            ...quest, answers: quest.answers.sort(() => Math.random() - 0.5)
                        }
                    return quest;
                }),
                selectedAns: null
            };


        case ActionType.SELECT_ANSWER:
            const [answer] = state.quiz[state.curIndex].answers.filter(({ answer }) =>
                answer === action.payload.answer);
            return {
                ...state,
                score: { ...state.score, [`${state.curIndex}`]: answer.isCorrect ? 20 : 0 },
                selectedAns: action.payload.answer
            };

        case ActionType.SUBMIT_QUIZ:
        case ActionType.QUIT_QUIZ:
            return {
                ...state,
                ...INITIAL_STATE
            };


        default:
            return state;
    }
};

export default reducer;