import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function NewFeedbackPage(){
    return <>
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" asChild >
                    <Link href="/feedback">
                        <ArrowLeft className="h-4 w-4"/>
                    </Link>
                </Button>
                <h1 className="text-3xl font-bold">Share your feedback</h1>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle> New Feedback</CardTitle>
                    <CardDescription>Share your idea with the community</CardDescription>
                    <CardContent>
                        
                    </CardContent>
                </CardHeader>
            </Card>
        </div>
    </>
}