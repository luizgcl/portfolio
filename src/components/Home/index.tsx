import React from "react";
import { Container, Main, Navbar, Section } from "../../@global/styles";
import { GithubLogo, LinkedinLogo, InstagramLogo, ArrowDown, ArrowUp, AngularLogo, StackOverflowLogo, Calendar } from 'phosphor-react';
import { Photo } from "../Photo";
import { ReactIcon } from "../../@global/Icons/ReactIcon";
import { JiraIcon } from "../../@global/Icons/JiraIcon";
import { NodeIcon } from "../../@global/Icons/NodeIcon";
import { Skill } from "../Skill";
import { MongoDbIcon } from "../../@global/Icons/MongoDbIcon";
import { MySqlIcon } from "../../@global/Icons/MySQLIcon";
import { RedisIcon } from "../../@global/Icons/RedisIcon";
import { JavaIcon } from "../../@global/Icons/JavaIcon";

export function Home() {

  const skills = Array.from([
    {
      name: "Jira",
      progress: 85,
      logo: <JiraIcon
        size={64}
        children
      />
    },
    {
      name: "Angular",
      progress: 85,
      logo: <AngularLogo 
        size={64}
        children
      />
    },
    {
      name: "React",
      progress: 50,
      logo: <ReactIcon
        size={64}
        children
      />
    },
    {
      name: "NodeJS",
      progress: 85,
      logo: <NodeIcon
        size={64}
        children
      />
    },
    {
      name: "Java",
      progress: 75,
      logo: <JavaIcon
        size={64}
        children
      />
    },
    {
      name: "MongoDB",
      progress: 65,
      logo: <MongoDbIcon
        size={64}
        children
      />
    },
    {
      name: "MySQL",
      progress: 85,
      logo: <MySqlIcon
        size={64}
        children
      />
    },
    {
      name: "Redis",
      progress: 35,
      logo: <RedisIcon
        size={64}
        children
      />
    },
  ])

  const birthTime = new Date(Date.now()).getTime() - new Date(2002, 8, 10).getTime();
  const age = Math.floor(birthTime / 1000 / 60 / 60 / 24 / 365);

  return (
    <Main>
      <Section
        id="home"
        className="justify-between"
      >
        <Navbar>
          <h1 className="default-gradient text-5xl pb-4 mt-2 select-none">{'<luizgcl/>'}</h1>
        </Navbar>
        <Container>
          <div
            className="w-full py-6 flex flex-col md:flex-row items-center"
          >
            <ul className="float-left flex md:flex-col gap-6 ml-3">
              <li>
                <a
                  target={"_blank"}
                  href="https://github.com/luizgcl"
                >
                  <GithubLogo
                    size={32}
                    className="text-gray-200"
                  />
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://linkedin.com/in/luizgcl"
                >
                  <LinkedinLogo
                    size={32}
                    className="text-blue-700"
                  />
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://instagram.com/luizgcl"
                >
                  <InstagramLogo
                    size={32}
                    className="text-pink-500"
                  />
                </a>
              </li>
              <li>
                <a
                  target={"_blank"}
                  href="https://calendly.com/luizgcl"
                >
                  <Calendar
                    size={32}
                    className="text-blue-300"
                  />
                </a>
              </li>
            </ul>

            <div className="flex flex-1 items-center justify-center gap-6 mt-10 md:mt-0">
              <p className="text-gray-200 flex flex-col order-2 md:order-1">
                <span className="text-3xl default-gradient w-[180px] mb-2">
                  Luiz Leme
                </span>
                <span className="text-md md:text-xl">
                  {age} anos,
                </span>
                <span className="text-md md:text-xl">
                  Desenvolvedor Full Stack
                </span>
              </p>
              <Photo 
                className="order-1 md:order-2"
              />
            </div>
          </div>
        </Container>
        <a
          href="#about-me"
          className="link-button mb-10"
        >
          <ArrowDown
            size={32}
          />
          Veja mais
        </a>
      </Section>
      <Section className="justify-between">
        <a
          href="#home"
          className="link-button mt-20 mb-10 md:mb-20 tall:mb-10 tall:mt-10"
        >
          <ArrowUp
            size={32}
          />
          Home
        </a>
        <Container id="about-me">
          <div
            className="flex flex-col md:flex-row gap-5 mx-5 md:mx-24 tall-xs:h-2/3"
          >
            <span className="d-flex flex-col float-left w-full md:w-1/2">
              <h2 className="animation-start text-gray-100 text-3xl font-bold">Sobre mim</h2>
              <p className="text-gray-200 mt-6">
                <span>
                  Me chamo Luiz Gustavo, tenho {age} anos, Desenvolvedor Full Stack, atualmente trabalhando na 
                  {' '}<a target="_blank" className="ml-link" href="https://madelife.com.br">MadeLife</a>.<br/>
                  Sou apaixonado por tecnologia e programação, desde 14 anos passei a me interessar pela programação começando
                  com Java, desenvolvendo plugins de Minecraft com conexões ao banco de dados MySQL e MongoDB fui me aperfeiçoando até chegar na programação web, onde trabalho atualmente.<br/>
                  Possuo experiencia com Angular(2.0+), Laravel, React, NodeJS, NestJS, Docker e Spring.<br/>
                  Nas horas vagas procuro estudar novas linguagens e aprimorar o que ja sei, atualmente estou estudando Rust e Elixir.
                </span>
              </p>
            </span>
            <span className="d-flex flex-col float-right w-full md:w-1/2">
              <h2 className="animation-start text-gray-100 text-3xl font-bold">Conhecimento</h2>
              <p className="flex flex-col gap-2 mt-6 overflow-auto max-h-[31.25rem] tall:max-h-[25rem] scroll-list">
                {
                  skills.map(skill => (
                    <Skill
                      key={skill.name}
                      skillName={skill.name}
                      progressValue={skill.progress}
                    >
                      {skill.logo}
                    </Skill>
                  ))
                }
              </p>
            </span>
          </div>
        </Container>
        <footer 
            className="glass w-full flex justify-center items-center gap-2 p-4 mt-10 md:mt-20 text-gray-100 tall:mt-2">
            <h2 className="default-gradient text-2xl">{'<luizgcl/>'}</h2>
            <span>
              &copy; 
            </span>
            <span>{new Date(Date.now()).getFullYear()}</span>
          </footer>
      </Section>
    </Main>
  )
}
