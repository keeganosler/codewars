function pokemonDamageCalculator(a, d, e) {
  let damage = Math.round(50*(a/d)*e)
  return damage
}

console.log(pokemonDamageCalculator(2,4,2))
