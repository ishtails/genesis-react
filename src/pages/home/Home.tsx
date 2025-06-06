import { Button } from "@/lib/components/ui/button";
import { useStorePersist } from "@/lib/context/zustand";
import { motion } from "motion/react"
import client from "@/lib/utils/api-client";

export default function HomePage() {
    const { bears, setBears } = useStorePersist();
    
    async function handleClick() {
        try {
            const res = await client.example[":id"].$post({
                json: {
                    name: "kartik",
                },
                param: {
                    id: "123",
                }
            })
            const parsed = await res.json();
            console.log(parsed);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div
            className="flex flex-col items-center justify-center h-full gap-10"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.1 }}
                transition={{
                    scale: { type: "spring", visualDuration: 0.2, bounce: 0.5 },
                }}
                className="rounded-full @lg/main:size-100 size-50 bg-rose-500"
                onClick={() => {setBears(bears + 1); handleClick();}}
            />

            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                className="mt-10 font-mono text-4xl font-bold tracking-widest text-rose-500"

            >
                {bears}
            </motion.div>

            <div className="flex gap-2">
                <Button
                    variant="secondary"
                    onClick={() => setBears(0)}
                >
                    Reset
                </Button>
            </div>
        </div>
    )
}