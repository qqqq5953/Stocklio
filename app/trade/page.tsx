import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

export default function TradePage() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Trade</h2>
        <Link href="/trade/add" className="text-sm text-muted-foreground">
          Add Trade
        </Link>
      </div>
      <div className="p-6 max-w-xl mx-auto space-y-6 ">
        <Tabs defaultValue="buy">
          <TabsList className="w-full">
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
          </TabsList>
          <TabsContent value="buy" className="flex flex-col gap-4 py-4">
            <Card>
              <CardContent>
                <div className="text-sm text-muted-foreground text-center">Total Cost</div>
                <div className="flex items-end justify-center gap-2">
                  <span className="text-2xl font-bold">$100</span>
                  <span className="text-sm text-muted-foreground mb-1 font-medium">USD</span>
                </div>
              </CardContent>
            </Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticker</TableHead>
                  <TableHead>ROI</TableHead>
                  <TableHead>Gain/Loss</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Avg Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">AAPL</TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell>3000</TableCell>
                  <TableCell className="text-right">150</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="sell" className="flex flex-col gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent>
                  <div className="text-sm text-muted-foreground text-center">Gain / Loss</div>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-2xl font-bold">$100</span>
                    <span className="text-sm text-muted-foreground mb-1 font-medium">USD</span>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <div className="text-sm text-muted-foreground text-center">ROI</div>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-2xl font-bold">20%</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Ticker</TableHead>
                  <TableHead>ROI</TableHead>
                  <TableHead>Gain/Loss</TableHead>
                  <TableHead>Value</TableHead>
                  <TableHead>Avg Cost</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">AAPL</TableCell>
                  <TableCell>10%</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell>3000</TableCell>
                  <TableCell className="text-right">150</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}