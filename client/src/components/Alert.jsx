import { useAppContext } from '../context/appContext';

const Alert = () => {
  const { alertType, alertText } = useAppContext();
  return (
    <div
      className={`py-1.5 px-3 mb-4 border-transparent rounded-sm text-center tracking-wider alert-${alertType}`}
    >
      {alertText}
    </div>
  );
};
export default Alert;
