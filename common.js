// i prefer vec a vec b to avoid using call
function cross(vectA, vectB) {
  return vectA.x * vectB.y + vectA.y * vectB.x // go to common branch
}

