import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export default function PerformancePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold">Performance</h2>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card><CardContent>Total Value</CardContent></Card>
          <Card><CardContent>Gain/Loss</CardContent></Card>
          <Card><CardContent>Change %</CardContent></Card>
        </div>

        <Card>
          <CardHeader><CardTitle>績效走勢圖</CardTitle></CardHeader>
          <CardContent>{/* Line Chart，篩選時間區段 */}</CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>AI 分析投資組合</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <Textarea placeholder="我目前投資報酬率偏低的原因是什麼？" />
            <div className="flex flex-wrap gap-2">
              <Button variant="outline">資產配置建議</Button>
              <Button variant="outline">比較與 S&P500</Button>
              <Button variant="outline">集中度分析</Button>
            </div>
            <p className="text-sm text-muted-foreground">
              每日可提問 {`{n}`} 次，限制 300 字內問題。若需更多請升級。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}