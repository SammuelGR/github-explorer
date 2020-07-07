import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
	return (
		<>
			<img src={logoImg} alt="GitHub Explorer" />
			<Title>Explore repositórios no GitHub</Title>

			<Form>
				<input placeholder="Digite o nome do repositório" />
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/23316518?s=460&u=3a3e5679b466cabfa7ef70afe5fe500c79179510&v=4"
						alt="Sammuel Reis"
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/23316518?s=460&u=3a3e5679b466cabfa7ef70afe5fe500c79179510&v=4"
						alt="Sammuel Reis"
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
					</div>

					<FiChevronRight size={20} />
				</a>
				<a href="teste">
					<img
						src="https://avatars3.githubusercontent.com/u/23316518?s=460&u=3a3e5679b466cabfa7ef70afe5fe500c79179510&v=4"
						alt="Sammuel Reis"
					/>
					<div>
						<strong>rocketseat/unform</strong>
						<p>Easy peasy highly scalable ReactJS & React Native Forms!</p>
					</div>

					<FiChevronRight size={20} />
				</a>
			</Repositories>
		</>
	);
};

export default Dashboard;
