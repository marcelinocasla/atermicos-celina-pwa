import { calculateQuote } from "@/lib/calculator";
import { DEFAULT_PRICES } from "@/lib/constants";
import { PoolDimensions, PoolType, SolariumConfig } from "@/types";

console.log("Verifying Calculator...");

const dims: PoolDimensions = { length: 8, width: 4 };
const type: PoolType = 'concrete';
const solarium: SolariumConfig = { top: 1, bottom: 0, left: 1, right: 0 };

try {
    const result = calculateQuote(
        dims,
        type,
        false, // hasArc
        solarium,
        DEFAULT_PRICES
    );
    console.log("Quote Result:", JSON.stringify(result, null, 2));
} catch (error) {
    console.error("Error calculating quote:", error);
}
