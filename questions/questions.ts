export enum AnswerType {
    Continue,
    SkipTo,
    Answer
}

type Question = {
    question: string,
    prompt_one: string,
    prompt_two: string,
    one: AnswerType,
    two: AnswerType,
    val_one: number | null
    val_two: number | null
}


export const Questions: Question[] = [
    { question: "Is the patient completely confined to bed or chair?",
        one: AnswerType.Answer, two: AnswerType.Continue, val_one: 4, val_two: null, prompt_one: "Yes", prompt_two: "No" }, // 1
    { question: "Does the patient spend more than 50% of waking hours in bed or chair?",
        one: AnswerType.Continue, two: AnswerType.SkipTo, val_one: null, val_two: 6, prompt_one: "Yes", prompt_two: "No" }, // 2,
    { question: "Can the patient perform any selfcare?",
        one: AnswerType.Answer, two: AnswerType.Answer, val_one: 3, val_two: 4, prompt_one: "Only limited selfcare", prompt_two: "No selfcare at all" }, // 3
    { question: "Is the patient able to get out of bed/chair and walk independently?",
        one: AnswerType.Continue, two: AnswerType.Answer, val_one: null, val_two: 3, prompt_one: "Yes", prompt_two: "No" }, // 4
    { question: "Is the patient up and about for more than 50% of waking hours?",
        one: AnswerType.Continue, two: AnswerType.Answer, val_one: null, val_two: 3, prompt_one: "Yes", prompt_two: "No" }, // 5
    { question: "Is the patient able to carry out all selfcare activities independently?",
        one: AnswerType.Continue, two: AnswerType.Answer, val_one: null, val_two: 3, prompt_one: "Yes", prompt_two: "No" }, // 6
    { question: "Is the patient able to carry out work activities ( job, household, usual roles )?",
        one: AnswerType.Continue, two: AnswerType.Answer, val_one: null, val_two: 2, prompt_one: "Yes", prompt_two: "No" }, // 7
    { question: "Is the patient restricted while doing physically strenuous activity (e.g., heavy lifting, sports)?",
        one: AnswerType.Answer, two: AnswerType.Continue, val_one: 1, val_two: null, prompt_one: "Yes", prompt_two: "No" }, // 8
    { question: "Is the patient fully active with no limitations compared to pre-illness status?",
        one: AnswerType.Answer, two: AnswerType.Answer, val_one: 0, val_two: 1, prompt_one: "Yes", prompt_two: "No" } // 9

];
