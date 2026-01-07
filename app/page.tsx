"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
    ButtonGroup,
    ButtonGroupSeparator,
} from "@/components/ui/button-group"
import { Questions, AnswerType } from "@/questions/questions"

export default function Home() {
    const [idx, set_idx] = useState(0)
    const [res, set_res] = useState<number | null>(null)

    const current = Questions[idx]

    function handleAnswer(type: AnswerType, value: number | null) {
        switch (type) {
            case AnswerType.Continue:
                set_idx((prev) => prev + 1)
                break
            case AnswerType.SkipTo:
                if (value !== null) set_idx(value)
                break
            case AnswerType.Answer:
                if (value !== null) set_res(value)
                break
        }
    }

    return (
        <div className="flex min-h-screen items-center justify-center bg-background px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    key={res !== null ? "result" : idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.25 }}
                    className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-lg"
                >
                    {res !== null ? (
                        <div className="flex flex-col items-center gap-4 text-center">
                            <h2 className="text-base font-medium text-muted-foreground">
                                WHO Performance Status
                            </h2>
                            <div className="text-5xl font-bold">{res}</div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center gap-6 text-center">
                            <p className="text-base font-medium leading-relaxed">
                                {current.question}
                            </p>

                            <ButtonGroup className="w-full">
                                <Button
                                    className="flex-1 py-6 text-base"
                                    variant="secondary"
                                    onClick={() =>
                                        handleAnswer(current.one, current.val_one)
                                    }
                                >
                                    {current.prompt_one}
                                </Button>

                                <ButtonGroupSeparator />

                                <Button
                                    className="flex-1 py-6 text-base"
                                    variant="secondary"
                                    onClick={() =>
                                        handleAnswer(current.two, current.val_two)
                                    }
                                >
                                    {current.prompt_two}
                                </Button>
                            </ButtonGroup>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
