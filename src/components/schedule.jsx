
export default function Schedule() {
  return (
<div class="flex-1 overflow-auto bg-gray-100 py-6 px-4">
    <div class="overflow-x-auto">
      <div class="relative w-full overflow-auto">
        <table class="w-full caption-bottom text-sm">
          <thead class="[&amp;_tr]:border-b">
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Date
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Time
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Sport Type
              </th>
              <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                Location
              </th>
            </tr>
          </thead>
          <tbody class="[&amp;_tr:last-child]:border-0">
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">January 15, 2024</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">10:00 AM</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Football</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Stadium A</td>
            </tr>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">January 16, 2024</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">2:00 PM</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Basketball</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Stadium B</td>
            </tr>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">January 17, 2024</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">6:00 PM</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Baseball</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Stadium C</td>
            </tr>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">January 18, 2024</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">8:00 AM</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Tennis</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Stadium D</td>
            </tr>
            <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">January 19, 2024</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">12:00 PM</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Soccer</td>
              <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">Stadium E</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}

