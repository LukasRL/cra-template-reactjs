import { initialExample } from "../../reducers/example";
import { useAppSelector, useAppDispatch } from "../../hooks";
const Home = () => {
  const { loading, succes, error } = useAppSelector((state) => state.example);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div>
        <button
          aria-label="initial-saga"
          onClick={() => dispatch(initialExample())}
        >
          Initial Saga
        </button>
        <p>loading: {JSON.stringify(loading)}</p>
        <p>succes: {JSON.stringify(succes)}</p>
        <p>error: {JSON.stringify(error)}</p>
      </div>
    </div>
  );
};
export default Home;
