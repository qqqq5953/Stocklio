import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { AddForm } from "./components/add-form";

export default function TradePage() {
  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
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
  );
}