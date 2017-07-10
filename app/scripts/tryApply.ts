export function tryApply(fun: () => void) {
  try {
    fun();
  } catch (e) {
    console.error(`Catch error in function ${fun.name}: `, e);
  }
}
