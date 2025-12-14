import { useMemo, useState } from "react";
import "./Fretboard.css";

// 简化版音名：用升号
const NOTES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"] as const;
const NOTE_TO_SEMI: Record<string, number> = {
  C:0,"C#":1,Db:1, D:2,"D#":3,Eb:3, E:4, F:5,"F#":6,Gb:6,
  G:7,"G#":8,Ab:8, A:9,"A#":10,Bb:10, B:11,
};

// 标准调弦（6→1弦）
const TUNING = ["E","A","D","G","B","E"] as const;

function noteFrom(open: string, fret: number) {
  const base = NOTE_TO_SEMI[open];
  if (base === undefined) return "?";
  return NOTES[(base + fret) % 12];
}

type Sel = { s: number; f: number } | null;

const MARKER_FRETS = new Set([3,5,7,9,12]);

export default function Fretboard() {
  const strings = 6;
  const frets = 12;

  const sIdx = useMemo(() => Array.from({ length: strings }, (_, i) => i), []);
  const fIdx = useMemo(() => Array.from({ length: frets + 1 }, (_, i) => i), []);

  const [sel, setSel] = useState<Sel>(null);

  const selectedNote =
    sel ? noteFrom(TUNING[sel.s], sel.f) : null;

  return (
    <div className="fretboardWrap">
      <div className="headerRow">
        <div>
          <div className="title">Guitar Fretboard</div>
          <div className="sub">0–12 frets • click to select • markers at 3/5/7/9/12</div>
        </div>
        <div className="sub">
          Tip: you can later add scale/chord highlighting here.
        </div>
      </div>

      <div className="board">
        <div
          className="grid"
          style={{
            gridTemplateColumns: `72px repeat(${frets + 1}, minmax(44px, 1fr))`,
          }}
        >
          {/* Fret labels row */}
          <div />
          {fIdx.map((f) => (
            <div key={`fl-${f}`} className="fretLabels">
              {f}
            </div>
          ))}

          {/* Strings rows */}
          {sIdx.map((s) => (
            <>
              <div key={`sl-${s}`} className="stringLabel" title={`Open: ${TUNING[s]}`}>
                {strings - s} ({TUNING[s]})
              </div>

              {fIdx.map((f) => {
                const isSelected = sel?.s === s && sel?.f === f;
                const note = noteFrom(TUNING[s], f);

                return (
                  <button
                    key={`c-${s}-${f}`}
                    className="cell"
                    onClick={() => setSel({ s, f })}
                    title={`String ${strings - s}, fret ${f}: ${note}`}
                  >
                    {/* 品位 marker（只在第一根弦这一行画一次就够，但画在每格也 OK，我们只在最上那行画：这里用 s===0） */}
                    {s === 0 && MARKER_FRETS.has(f) && f !== 12 && <span className="dot" />}
                    {s === 0 && f === 12 && (
                      <>
                        <span className="dot double left" />
                        <span className="dot double right" />
                      </>
                    )}

                    {/* 选中显示音名 */}
                    {isSelected && (
                      <span className={"note " + (isSelected ? "selected" : "")}>
                        {note}
                      </span>
                    )}
                  </button>
                );
              })}
            </>
          ))}
        </div>

        <div className="readout">
          {sel ? (
            <>
              Selected: string <b>{strings - sel.s}</b>, fret <b>{sel.f}</b> → note{" "}
              <b>{selectedNote}</b>
            </>
          ) : (
            <>
              Click any position to see the note name. <span className="sub">（下一步加音阶/和弦高亮）</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
