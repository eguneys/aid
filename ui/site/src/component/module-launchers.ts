const ch: any = chest;

export default function moduleLaunchers() {

  if (ch.study) startAnalyse(ch.study);
  
}

function startAnalyse(cfg: any) {
  const analyse = (window as any).ChestAnalyse.start(cfg);
}
