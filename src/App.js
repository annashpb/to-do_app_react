import { BoxWrapper } from './components/Helpers/index';
import AddItemForm from './components/AddItemForm';
import AwaitingStart from './components/AwaitingStart';
import InProgress from './components/InProgress';
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
					<AwaitingStart />
				</BoxWrapper>
			</div>
			<div className="inProgressContainer">
				<BoxWrapper title="In progress">
					<InProgress />
				</BoxWrapper>
			</div>
			<div className="doneContainer">
				<BoxWrapper title="Done">
					Vivamus consectetuer hendrerit lacus. Cras ultricies mi eu turpis hendrerit fringilla. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Maecenas nec odio et ante tincidunt tempus.
					Nullam quis ante. Curabitur nisi. Nulla consequat massa quis enim. Quisque libero metus, condimentum nec, tempor a, commodo mollis, magna.
					Ut non enim eleifend felis pretium feugiat. Nulla sit amet est. In consectetuer turpis ut velit. Cras varius.
				</BoxWrapper>
			</div>
		</div>
	</div>
);

export default App;
