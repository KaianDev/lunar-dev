import { questions } from "@/data/questions";
import Title from "./Title";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";
import QuestionItem from "./QuestionItem";

const QuestionSection = () => {
  return (
    <section className="bg-luna-blue-dark">
      <div className="container px-4 py-10">
        <Title label="Perguntas Frequentes" />
        <Accordion
          type="single"
          collapsible
          className="flex flex-col items-start justify-around gap-4 md:flex-row md:flex-wrap"
        >
          {questions.map((item) => (
            <QuestionItem key={item.number} question={item} />
          ))}
        </Accordion>
        {/* <div className="flex flex-col items-start justify-around gap-2 md:flex-row md:flex-wrap">
          {questions.map((item) => (
            <div
              onClick={() => handleActive(item.number)}
              key={item.number}
              className="flex min-h-[96px] w-full cursor-pointer flex-col gap-2 rounded bg-luna-dark p-4 duration-1000 md:max-w-[48%]"
            >
              <div
                className={`flex items-center gap-2 ${
                  active === item.number ? "text-luna-pink" : "text-white"
                }`}
              >
                <span className="from-luna-medium-dark flex w-10 items-center justify-center rounded-tr-md bg-gradient-to-b p-1 text-xl ">
                  {item.number}
                </span>
                <p className="text-lg">{item.question}</p>
              </div>
              <div
                className={` rounded-md bg-black/60 p-4 text-luna-gray opacity-0 duration-300 ${
                  active === item.number
                    ? "visible block opacity-100 ease-out"
                    : "hidden"
                }`}
              >
                {item.response}
              </div>
            </div>
          ))}
        </div> */}
        {/* <div className="grid gap-4 md:grid-cols-2">
          {questions.map((item) => (
            
            // <Accordion
            //   className="flex rounded bg-luna-dark p-4 text-luna-gray"
            //   key={item.number}
            //   type="single"
            //   collapsible
            // >
            //   <AccordionItem value={item.number}>
            //     <AccordionTrigger>{item.question}</AccordionTrigger>
            //     <AccordionContent>{item.response}</AccordionContent>
            //   </AccordionItem>
            // </Accordion>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default QuestionSection;
