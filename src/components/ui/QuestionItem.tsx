import { Question } from "@/interfaces/question";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
interface QuestionItemProps {
  question: Question;
}
const QuestionItem = ({ question }: QuestionItemProps) => {
  return (
    <AccordionItem
      value={question.number}
      className="group flex min-h-[110px] w-full cursor-pointer flex-col gap-2 rounded bg-luna-dark p-4 duration-1000 md:max-w-[48%]"
    >
      <AccordionTrigger>
        <div className="flex gap-2 rounded bg-luna-dark text-white duration-200 group-hover:text-luna-pink">
          <h4 className="from-luna-medium-dark t flex w-10 items-center justify-center rounded-tr-md bg-gradient-to-b p-1 text-xl group-hover:text-luna-pink">
            {question.number}
          </h4>
          <p className="text-start">{question.question}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-luna-gray">
        {question.response}
      </AccordionContent>
    </AccordionItem>
  );
};

export default QuestionItem;
