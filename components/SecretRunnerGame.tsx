"use client";

import { useEffect, useRef, useState } from "react";

const GRAVITY = 0.9;
const JUMP_FORCE = -14;
const GROUND_Y = 220;
const MIN_OBSTACLE_SPACING = 140;

type Obstacle = { x: number };
type Coin = { x: number; y: number };

export default function SecretRunnerGame({ onClose }: { onClose: () => void }) {
  const [playerY, setPlayerY] = useState(GROUND_Y);
  const [velocity, setVelocity] = useState(0);
  const [obstacles, setObstacles] = useState<Obstacle[]>([]);
  const [coins, setCoins] = useState<Coin[]>([]);
  const [score, setScore] = useState(0);
  const [coinScore, setCoinScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [showHint, setShowHint] = useState(true);

  const raf = useRef<number | null>(null);

  /* ======================
     RESET
  ====================== */
  function resetGame() {
    setPlayerY(GROUND_Y);
    setVelocity(0);
    setObstacles([]);
    setCoins([]);
    setScore(0);
    setCoinScore(0);
    setGameOver(false);
    setShowHint(true);
  }

  /* ======================
     INPUT
  ====================== */
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Space" && playerY >= GROUND_Y && !gameOver) {
        setVelocity(JUMP_FORCE);
        setShowHint(false);
      }

      if (e.code === "Enter" && gameOver) {
        resetGame();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [playerY, gameOver]);

  /* ======================
     AUTO-HIDE HINT
  ====================== */
  useEffect(() => {
    if (!showHint) return;

    const timeout = setTimeout(() => {
      setShowHint(false);
    }, 3200);

    return () => clearTimeout(timeout);
  }, [showHint]);

  /* ======================
     GAME LOOP
  ====================== */
  useEffect(() => {
    if (gameOver) return;

    const loop = () => {
      setPlayerY((y) => Math.min(GROUND_Y, y + velocity));
      setVelocity((v) => v + GRAVITY);

      setObstacles((obs) =>
        obs.map((o) => ({ x: o.x - 6 })).filter((o) => o.x > -40)
      );

      setCoins((cs) =>
        cs.map((c) => ({ ...c, x: c.x - 5 })).filter((c) => c.x > -20)
      );

      setScore((s) => s + 1);

      // SAFE obstacle spawn
      setObstacles((prev) => {
        const last = prev[prev.length - 1];
        if (
          Math.random() < 0.02 &&
          (!last || last.x < 420 - MIN_OBSTACLE_SPACING)
        ) {
          return [...prev, { x: 420 }];
        }
        return prev;
      });

      if (Math.random() < 0.015) {
        setCoins((c) => [...c, { x: 420, y: 170 + Math.random() * 40 }]);
      }

      raf.current = requestAnimationFrame(loop);
    };

    raf.current = requestAnimationFrame(loop);

    return () => {
      if (raf.current !== null) cancelAnimationFrame(raf.current);
    };
  }, [velocity, gameOver]);

  /* ======================
     COLLISION
  ====================== */
  useEffect(() => {
    const playerBox = {
      x: 60,
      y: playerY,
      w: 40,
      h: 40,
    };

    obstacles.forEach((o) => {
      if (
        playerBox.x < o.x + 30 &&
        playerBox.x + playerBox.w > o.x &&
        playerBox.y + playerBox.h > GROUND_Y
      ) {
        setGameOver(true);
      }
    });

    coins.forEach((c) => {
      if (
        playerBox.x < c.x + 16 &&
        playerBox.x + playerBox.w > c.x &&
        playerBox.y < c.y + 16 &&
        playerBox.y + playerBox.h > c.y
      ) {
        setCoins((cs) => cs.filter((coin) => coin !== c));
        setCoinScore((n) => n + 1);
      }
    });
  }, [obstacles, coins, playerY]);

  /* ======================
     UI
  ====================== */
  return (
    <div className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center">
      <div className="relative w-[420px] h-[260px] rounded-xl bg-deepSpace border border-neonCyan/50 overflow-hidden shadow-[0_0_40px_rgba(0,245,255,0.35)]">
        {/* GLITCH GRID BACKGROUND */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Base grid */}
          <div className="absolute inset-0 glitch-grid opacity-40" />

          {/* Cyan glow pulse */}
          <div
            className="absolute inset-0
    bg-[radial-gradient(circle_at_30%_40%,rgba(0,245,255,0.22),transparent_60%)]
    animate-grid-pulse"
          />

          {/* Orange accent burst */}
          <div
            className="absolute inset-0
    bg-[radial-gradient(circle_at_70%_65%,rgba(243,112,9,0.18),transparent_65%)]
    animate-grid-pulse-delayed"
          />

          {/* Scan jitter */}
          <div className="absolute inset-0 glitch-scan opacity-30" />
        </div>

        {/* HUD */}
        <div className="absolute top-2 left-3 text-xs text-neonCyan z-10">
          SCORE: {score} | COINS: {coinScore}
        </div>

        {/* PLAYER */}
        <img
          src="/TzumiTPBkg.png"
          className="absolute left-[60px] w-10 h-10 object-contain z-10"
          style={{ bottom: `${GROUND_Y - playerY}px` }}
        />

        {/* OBSTACLES */}
        {obstacles.map((o, i) => (
          <div
            key={i}
            className="absolute bottom-0 w-6 h-8 bg-[#F37009]"
            style={{ left: o.x }}
          />
        ))}

        {/* COINS */}
        {coins.map((c, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-neonCyan shadow-[0_0_8px_rgba(0,245,255,0.8)]"
            style={{ left: c.x, top: c.y }}
          />
        ))}

        {/* GROUND */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-neonCyan/50" />

        {/* JUMP HINT */}
        {showHint && !gameOver && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2
            text-xs text-neonCyan/80 font-mono tracking-widest
            animate-pulse select-none z-10"
          >
            [ SPACE ] — JUMP
          </div>
        )}

        {/* GAME OVER */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white z-20">
            <div className="text-xl font-bold mb-3 tracking-widest">
              SYSTEM FAILURE
            </div>

            <div className="flex gap-3">
              <button
                onClick={resetGame}
                className="px-4 py-2 text-sm bg-neonCyan text-black rounded shadow-[0_0_12px_rgba(0,245,255,0.6)]"
              >
                PLAY AGAIN
              </button>

              <button
                onClick={onClose}
                className="px-4 py-2 text-sm bg-white/10 border border-white/20 rounded"
              >
                EXIT
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
