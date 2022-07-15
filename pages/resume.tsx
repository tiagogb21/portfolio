import Bar from "../components/Bar";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Educação</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Desenvolvedor Full Stack Web
            </h5>
            <p className="font-semibold">Trybe (2021/atual)</p>
            <p className="my-3">
              O programa conta com <strong>mais de 1.500 horas</strong> de aulas
              e aborda introdução ao desenvolvimento de software, front-end,
              back-end, ciência da computação, engenharia de software,
              metodologias ágeis e habilidades comportamentais.
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experiência</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Professor particular de matemática
            </h5>
            <p className="my-3">
              Ministrei aulas particulares para quase 100 alunos, em horários
              flexíveis. Contribui com a realização do sonho de meus alunos,
              entrar em uma universidade federal. Atuei com alunos do ensino
              superior, ajudando-os a realizar o sonho de se formar na faculdade
              de Licenciatura em Matemática.
            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Linguagens, Bibliotecas</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Ferramentas e Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
