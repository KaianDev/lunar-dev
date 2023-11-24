import { questions } from "@/data/questions";
import Title from "./Title";
import { Accordion } from "./accordion";
import QuestionItem from "./QuestionItem";

const QuestionSection = () => {
  return (
    <section className="bg-luna-blue-dark">
      <div className="container px-4 py-10">
        <Title label="Perguntas Frequentes" />
        <Accordion
          type="single"
          collapsible
          className="grid grid-cols-1 items-start gap-4 md:grid-cols-2"
        >
          {questions.map((item, index) => (
            <QuestionItem key={item.number} index={index} question={item} />
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default QuestionSection;
