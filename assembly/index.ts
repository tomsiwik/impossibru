import { SpecialService } from "./lib/evil";

/**
 * Challenge:
 * 
 * X. broken() does not work 
 *    - assemblyscript requires to provide a return type
 *    - no type inference
 *    - `npm run build` will fail (unless Module is exported)
 */
export function broken() {
  const service = new SpecialService()

  return service.module;
}
