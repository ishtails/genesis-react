import { Button } from "@/src/lib/components/ui/button";
import { useStorePersist } from "@/src/lib/hooks/zustand";
import { motion } from "motion/react"
import client from "@/src/lib/utils/api-client";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { cn } from "@/src/lib/utils";

export default function HomePage() {
    const { bears, setBears } = useStorePersist();
    const { mutate, status, error } = useMutation({
        mutationFn: () => {
            return client.example[":id"].$post({
                json: {
                    name: "styles",
                },
                param: {
                    id: "1",
                }
            })
        },
        onSuccess: async (res) => {
            const parsed = await res.json();
            console.log(parsed);
            toast.success("Successfully fetched data");
        },
        onError: (err) => {
            console.error(err);
            toast.error("Failed to fetch data");
        }
    });

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
                className={cn(
                    "rounded-full @lg/main:size-100 size-50 bg-amber-500",
                    status === "success" && "bg-green-500", 
                    error && "bg-red-500",
                )}
                onClick={() => { setBears(bears + 1); mutate(); }}
            />

            <motion.div
                initial={{
                    opacity: 0
                }}
                animate={{
                    opacity: 1
                }}
                className={cn(
                    "mt-10 font-mono text-4xl font-bold tracking-widest text-amber-500",
                    status === "success" && "text-green-500",
                    error && "text-red-500"
                )}
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