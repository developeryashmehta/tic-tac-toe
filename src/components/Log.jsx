export default function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => {
        return (
          <li key={`${turn.square.row}${turn.square.col}`}>
            {turn.player} selected {turn.square.row} Row and {turn.square.col}{" "} Column
          </li>
        );
      })}
    </ol>
  );
}
