import { BoxWrapper } from './components/Helpers/index';
import { stats } from './utils';
import AddItemForm from './components/AddItemForm';
import CardsFilter from './components/CardsFilter';
import './styles/general.scss';

const App = () => (
	<div>
		<header className="appHeader">
			<h1>To-do application</h1>
		</header>
		<div className="container grid">
			<div className="addItemContainer">
				<BoxWrapper title="Add an item">
					<AddItemForm />
				</BoxWrapper>
			</div>
			<div className="awaitingContainer">
				<BoxWrapper title="Awaiting start">
					<CardsFilter column={stats.aws} />
				</BoxWrapper>
			</div>
			<div className="inProgressContainer">
				<BoxWrapper title="In progress">
					<CardsFilter column={stats.inprog} />
				</BoxWrapper>
			</div>
			<div className="doneContainer">
				<BoxWrapper title="Done">
					<CardsFilter column={stats.done} />
				</BoxWrapper>
			</div>
		</div>
	</div>
);

export default App;
