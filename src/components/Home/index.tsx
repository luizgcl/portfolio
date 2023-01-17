import React from "react";
import { Container, Section } from "../../@global/styles";
import { GithubLogo, LinkedinLogo, InstagramLogo } from 'phosphor-react';
import { Photo } from "../Photo";

export function Home() {
  return (
    <Section>
      <Container>
        <h1
          className="default-gradient text-5xl h-20 mt-2"
        >
          {'<luizgcl/>'}
        </h1>
        <div 
          className="mt-28 flex flex-col md:flex-row items-center gap-10 ease-in-out md:h-[50vh]">
          <Photo/>
          <p 
            className="font-bold text-gray-200 flex flex-col text-left md:w-[650px]">
              <span className="text-3xl default-gradient w-[180px] mb-2">
                Luiz Leme
              </span>
              <span className="text-md md:text-xl">
                20 anos, atualmente estou cursando o 2º período de Sistemas para Internet pela Fatec de Jales.
              </span>
              <span className="text-md md:text-xl">
                Desenvolvedor Full Stack, atualmente trabalho na empresa Madelife, onde utilizo as técnologias Angular e Laravel para o desenvolvimento.<br/>
                Nas horas vagas estudo Node, Elixir, React e ReactNative.
              </span>
          </p>
        </div>
        <footer
          className="mt-12 md:mt-28 flex flex-1 flex-col md:flex-row gap-4 md:bottom-10 md:fixed"
        >
          <a
            className="p-1 bg-gradient-to-r from-purple-700 to-emerald-500 w-[290px] rounded-md cursor-pointer flex"
             target={"_blank"}
            href="https://github.com/luizgcl"
          >
            <span className="flex items-center justify-center px-6 py-2 w-[290px] text-gray-200 bg-gray-700 hover:bg-gradient-to-r">
              <GithubLogo size={64} />
              <p className="font-bold">Acesse meu Git Hub</p>
            </span>
          </a>

          <a
            className="p-1 bg-gradient-to-b from-blue-400 to-blue-600 w-[290px] rounded-md cursor-pointer flex"
            target={"_blank"}
            href="https://linkedin.com/in/luizgcl"
          >
            <span className="flex items-center justify-center px-6 py-2 w-[290px] text-gray-200 bg-gray-700 hover:bg-gradient-to-b">
              <LinkedinLogo size={64} />
              <p className="font-bold">Acesse meu Linkedin</p>
            </span>
          </a>

          <a
            className="p-1 bg-gradient-to-r from-yellow-400 to-pink-600 w-full md:w-[290px] rounded-md cursor-pointer flex"
            target={"_blank"}
            href="https://instagram.com/luizgcl"
          >
            
            <span className="flex items-center justify-center px-6 py-2 w-full md:w-[290px] text-gray-200 bg-gray-700 hover:bg-gradient-to-r">
              <InstagramLogo size={64} />
              <p className="font-bold">Acesse meu Instagram</p>
            </span>
          </a>
        </footer>
      </Container>
    </Section>
  )
}