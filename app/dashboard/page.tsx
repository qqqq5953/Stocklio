import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card><CardContent>Total Value: $100,000</CardContent></Card>
        <Card><CardContent>Total Gain/Loss: +$5,000</CardContent></Card>
        <Card><CardContent>Change %: +5%</CardContent></Card>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card><CardContent>{/* 圓餅圖佔比 PieChart */}</CardContent></Card>
        <Card>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticker</TableHead>
                  <TableHead>Avg Cost</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Gain/Loss</TableHead>
                  <TableHead>%</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {/* Map Stock Rows */}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}