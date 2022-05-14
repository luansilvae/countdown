import React from "react";
import { useCountdown } from "../../hooks/useCountdown";

// Componente que renderiza cada elemento do contador
const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="countdown__display">
      <p className="countdown__display-value" >{String(value).padStart(2, '0')}</p>
      <span className="countdown__display-type">{type}</span>
    </div>
  );
};

// Componente que renderiza o contador completo
const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="countdown__timer">
      <DateTimeDisplay value={days} type={"Dias"} />
      <span className="countdown__timer-divider">:</span>
      <DateTimeDisplay value={hours} type={"Horas"} />
      <span className="countdown__timer-divider">:</span>
      <DateTimeDisplay value={minutes} type={"Minutos"} />
      <span className="countdown__timer-divider">:</span>
      <DateTimeDisplay value={seconds} type={"Segundos"} />
    </div>
  );
};

// Componente que renderiza mensagem ao finalizar contagem
const CountdownExpired = () => {
  return (
    <div className="countdown__expired">
      <span className="countdown__expired-text">Contagem finalizada</span>
    </div>
  );
};

// Chamada do contador
const CountdownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);
  
  // Verifica validade do contador
  if (days + hours + minutes + seconds <= 0) { 
    return <CountdownExpired />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
