import Authenticate from "./authenticate";
import SignUpForm from "./signupform";
export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Authenticate />
    <SignUpForm />
  </>
);
}

export default App
