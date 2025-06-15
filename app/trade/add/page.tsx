import Link from "next/link";
import { AddForm } from "../components/add-form";
import { ChevronLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function AddTrade() {
  return (
    <div>
      <div className="flex items-center gap-1">
        <Button variant="ghost" size="icon" asChild>
          <Link href="/trade">
            <ChevronLeftIcon className="w-4 h-4" />
          </Link>
        </Button>
        <h2 className="text-2xl font-bold">Add Trade</h2>
      </div>
      <div className="pl-10 pr-6 py-6 max-w-xl mx-auto space-y-6">
        <AddForm />

        <Card>
          <CardHeader>
            <CardTitle>上傳對帳單</CardTitle>
          </CardHeader>
          <CardContent>
            <Input type="file" accept="application/pdf,image/*" />
            <p className="text-sm text-muted-foreground mt-2">僅支援 PDF 或圖片，檔案大小 &lt;= 5MB。</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}