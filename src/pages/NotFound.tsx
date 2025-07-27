import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import colors from '../theme/colors';
import { wait } from '@testing-library/user-event/dist/utils';
import { SiBookstack } from '@icons-pack/react-simple-icons';

const MAZE = [
  ['S', '', 'X', '', '', '', 'X', '', '', ''],
  ['', 'X', 'X', '', 'X', '', 'X', 'X', '', ''],
  ['', '', '', '', 'X', '', '', '', 'X', ''],
  ['X', 'X', '', 'X', 'X', '', 'X', '', 'X', ''],
  ['', '', '', '', '', '', '', '', '', ''],
  ['', 'X', '', 'X', 'X', 'X', '', 'X', 'X', ''],
  ['', 'X', '', '', '', '', 'X', '', '', ''],
  ['', '', 'X', 'X', 'X', '', 'X', 'X', '', ''],
  ['', '', '', '', 'X', '', '', '', 'X', 'E'],
  ['', '', 'X', '', '', '', '', 'X', '', ''],
];
const START_POS = { row: 0, col: 0 };
const EXIT_POS = { row: 8, col: 9 };

// Theme colors for "library at night"
const cellNight = "#121223";
const cellVisited = "#dbc6a7";
const cellCurrent = "#f0e8ac";
const cellWall = "#3a354d";
const textWall = "#bbb";
const cellExit = "#24917d";
const transition = "background 0.28s, color 0.14s";

function getKey(row: number, col: number) {
  return `${row}-${col}`;
}

const NotFound = () => {
  const navigate = useNavigate();
  const [pos, setPos] = useState(START_POS);
  const [visited, setVisited] = useState(() => ({
    [getKey(START_POS.row, START_POS.col)]: true
  }));

  const directions = [
    { dr: -1, dc: 0, label: '↑', aria: 'up' },
    { dr: 1, dc: 0, label: '↓', aria: 'down' },
    { dr: 0, dc: -1, label: '←', aria: 'left' },
    { dr: 0, dc: 1, label: '→', aria: 'right' },
  ];

  // Movement handler
  const handleMove = (dr: number, dc: number) => {
    const newRow = pos.row + dr;
    const newCol = pos.col + dc;
    if (
      newRow >= 0 && newRow < MAZE.length &&
      newCol >= 0 && newCol < MAZE[0].length &&
      MAZE[newRow][newCol] !== 'X'
    ) {
      setPos({ row: newRow, col: newCol });
      setVisited((prev) => ({
        ...prev,
        [getKey(newRow, newCol)]: true
      }));
    }
  };

  const atExit = pos.row === EXIT_POS.row && pos.col === EXIT_POS.col;

  // Keyboard controls for WASD/Arrow keys
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (atExit) {
    const timer = setTimeout(() => {
      navigate('/');
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }
      switch (e.key.toLowerCase()) {
        case 'w':
        case 'arrowup':
          handleMove(-1, 0);
          break;
        case 'a':
        case 'arrowleft':
          handleMove(0, -1);
          break;
        case 's':
        case 'arrowdown':
          handleMove(1, 0);
          break;
        case 'd':
        case 'arrowright':
          handleMove(0, 1);
          break;
        default:
          return;
      }
      e.preventDefault();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [pos, atExit]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background:
        "repeating-linear-gradient(135deg, #23223C 0px, #22203A 80px, #23223C 160px)",
      fontFamily: 'Inter, "Fira Mono", monospace, sans-serif',
      color: colors.primary
    }}>
      <div style={{
        fontSize: '2.6rem',
        fontWeight: 900,
        marginBottom: '1rem',
        letterSpacing: 1,
        color: "#f5ebbd",
        textShadow: "0 2px 10px #1d182c",
      }}>
        404: Lost in the Library Maze at Night!
      </div>
      <p style={{
        color: "#b6b0df",
        marginBottom: '2rem',
        fontSize: '1.19rem',
        maxWidth: 440,
        textAlign: 'center',
        textShadow: "0 2px 6px #221d31",
      }}>
        The hush of midnight, books everywhere, corridors dimly lit…<br />
        <span style={{ color: "#ffe0b2" }}>
          Help the student find the Library Exit — use WASD or arrow keys!
        </span>
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${MAZE[0].length}, 2.1rem)`,
          gap: '0.30rem',
          marginBottom: '1.2rem',
          background: "#221f36",
          padding: "0.7rem",
          borderRadius: 10,
          boxShadow: "0 0 20px #0e1630c0",
        }}
      >
        {MAZE.map((row, r) =>
          row.map((cell, c) => {
            const key = getKey(r, c);
            const isVisited = visited[key];
            const isCurrent = r === pos.row && c === pos.col;
            let bg = cellNight;
            let cellText = '';
            let fontWeight = 700;
            let color = "#fff";
            let border = "1px solid #191730";
            if (cell === 'X') {
              bg = cellWall;
              cellText = "🚧";
              color = textWall;
            } else if (isVisited) {
              if (cell === 'E') {
                bg = cellExit;
                cellText = "🏁";
                color = "#fff";
                fontWeight = 800;
              } else if (isCurrent) {
                bg = cellCurrent;
                cellText = "🧑‍🎓";
                color = "#987a1a";
              } else {
                bg = cellVisited;
                color = colors.primary;
              }
            }

            if (!isVisited && cell !== 'X') {
              cellText = "🟫";
            }

            if (!isVisited && isCurrent) {
              bg = cellCurrent;
              cellText = "🧑‍🎓";
              color = "#987a1a";
              fontWeight = 900;
            }

            return (
              <div key={key} style={{
                width: '2rem',
                height: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: bg,
                border,
                borderRadius: 5,
                fontWeight: fontWeight,
                fontSize: '1.12rem',
                color,
                boxShadow: isCurrent ? "0 0 10px 2px #f0ebac77" : undefined,
                transition,
                userSelect: "none",
              }}>
                {cellText}
              </div>
            );
          })
        )}
      </div>
      <div style={{ marginBottom: '1.1rem', display: "flex", gap: "0.18rem" }}>
        {directions.map(({ dr, dc, label, aria }) => (
          <Button
            key={aria}
            onClick={() => handleMove(dr, dc)}
            style={{
              background: atExit ? "#a2e9c4" : "#23233A",
              color: atExit ? "#35836a" : "#f7e8cd",
              border: '1px solid #3b395e',
              minWidth: '2.3rem',
              minHeight: '2.3rem',
              fontSize: '1.05rem',
              fontWeight: 700,
              borderRadius: 5,
              boxShadow: "0 1px 5px #19192e40",
              opacity: atExit ? 0.34 : 1,
              transition,
            }}
            aria-label={`move-${aria}`}
            disabled={atExit}
          >
            {label}
          </Button>
        ))}
      </div>
      {atExit && (
        <div style={{
          fontSize: '1.05rem',
          color: colors.secondary,
          marginBottom: '1.06rem',
          background: "#212f2a",
          borderRadius: 6,
          padding: "0.7rem 1.3rem 0.8rem 1.3rem",
          fontWeight: 700,
          letterSpacing: 0.5,
          boxShadow: "0 2px 8px #17312255",
        }}>
          Success! You exited the library maze and stepped out into the starlit quad. 🌙🎉
        </div>
      )}
      <Button
        onClick={() => navigate('/')}
        style={{
          fontSize: '1rem',
          borderRadius: 6,
          padding: '0.6rem 2rem',
          background: colors.primary,
          color: '#fff',
          marginTop: '0.9rem',
          fontWeight: 700,
          letterSpacing: 1.05
        }}
      >
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
