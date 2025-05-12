"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import MetaIcon from "../icons/Meta";
import MistralIcon from "../icons/Mistral";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  model: z.string().min(1, "Model is required").max(50),
  temperature: z
    .number()
    .min(0, "CreationTemperature must be atleast 0")
    .max(2, "Temperature must be atmost 2"),
  content: z
    .string()
    .min(50, "Content must be at least 50 characters")
    .max(500, "Content must be at most 500 characters"),
  type: z.enum(["personal", "band"], {
    errorMap: () => ({ message: "Type is required" }),
  }),
  tone: z.enum(["professional", "casual", "sarcastic", "funny", "passionate"], {
    errorMap: () => ({ message: "Tone is required" }),
  }),
  emojis: z.boolean().default(false).optional(),
});

const UserInput = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      model: "llama3-8b-8192",
      temperature: 1,
      content: "",
      type: "personal",
      tone: "professional",
      emojis: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="relative flex flex-col items-start gap-8">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid w-full items-start gap-6"
        >
          <fieldset className="grid gap-6 rounded-[8px] border p-4 bg-background/10 backdrop-blur-sm">
            <legend className="">Settings</legend>
            <div className="grid gap-3">
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Model</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select a model" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="llama3-70b-8192">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MetaIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-2">
                                    Llama 3
                                  </span>
                                  70B
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="mistral-saba-24b">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MistralIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-2">
                                    Mistral
                                  </span>
                                  24b
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                          <SelectItem value="llama3-8b-8192">
                            <div className="flex items-start gap-3 text-muted-foreground">
                              <MetaIcon className="size-5" />
                              <div>
                                <p>
                                  <span className="text-foreground font-medium mr-2">
                                    Llama 3
                                  </span>
                                  8B
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit">Submit</Button>
          </fieldset>
        </form>
      </Form>
    </div>
  );
};

export default UserInput;
