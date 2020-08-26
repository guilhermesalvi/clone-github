import React from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className={"username"} to={"/guilhermesalvi"}>
          guilhermesalvi
        </Link>

        <span>/</span>

        <Link
          className={"reponame"}
          to={"/guilhermesalvi/aspnetcore-with-cqrs"}
        >
          aspnetcore-with-cqrs
        </Link>
      </Breadcrumb>

      <p>A simple app that use asp net core with cqrs</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/guilhermesalvi/grpcservice"}>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
