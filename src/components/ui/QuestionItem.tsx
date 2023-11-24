"use client";
import { Question } from "@/interfaces/question";
import { AccordionContent, AccordionItem, AccordionTrigger } from "./accordion";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

interface QuestionItemProps {
  question: Question;
  index: number;
}
const QuestionItem = ({ question, index }: QuestionItemProps) => {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <AccordionItem
      id={question.number}
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="300"
      data-aos-easing="linear"
      value={question.number}
      className="group flex w-full cursor-pointer flex-col gap-2 rounded bg-luna-dark px-4 duration-1000 sm:min-h-[105px] lg:min-h-[81px]"
    >
      <AccordionTrigger>
        <div className="flex gap-2 rounded bg-luna-dark text-white duration-200 group-hover:text-luna-pink">
          <h4 className="t flex w-10 items-center justify-center rounded-tr-md bg-gradient-to-b from-luna-medium-dark p-1 text-xl group-hover:text-luna-pink">
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
