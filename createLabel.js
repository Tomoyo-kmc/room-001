import { THREE } from "https://code4fukui.github.io/egxr.js/egxr.js";

export const createLabel = (s, w = .12, h = .03, fontsize = 32) => {
  // ラベル
  const canvas = document.createElement("canvas");
  canvas.width = 512;
  canvas.height = canvas.width / w * h;
  const ctx = canvas.getContext("2d");

  const labelTex = new THREE.CanvasTexture(canvas);
  const labelMat = new THREE.SpriteMaterial({ map: labelTex, transparent: true });
  const label = new THREE.Sprite(labelMat);
  label.scale.set(w, h, 1); // 12cm x 3cm
  label.setText = (s) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0,0,0,0.6)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#fff";
    ctx.font = "bold " + fontsize + "px sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(s, canvas.width / 2, canvas.height / 2);
    labelTex.needsUpdate = true;
  };
  label.setText(s);
  return label;
};
