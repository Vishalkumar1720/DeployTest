import React from 'react';
import {
  MaterialReactTable,
  createMRTColumnHelper,
  useMaterialReactTable,
} from 'material-react-table';
import { Box, Button } from '@mui/material';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { mkConfig, generateCsv, download } from 'export-to-csv'; //or use your library of choice here
import { data } from './MakeData.js';


const columnHelper = createMRTColumnHelper();

const columns = [
  columnHelper.accessor('batchNumber', {
    header: 'batchNumber',
    size: 40,
  }),
  columnHelper.accessor('medecineName', {
    header: 'medecine Name',
    size: 120,
  }),
  columnHelper.accessor('category', {
    header: 'category',
    size: 120,
  }),
  columnHelper.accessor('expiryDate', {
    header: 'expiryDate',
    size: 300,
  }),
  columnHelper.accessor('maxRetailPrice', {
    header: 'maxRetailPrice',
  }),
  columnHelper.accessor('discount', {
    header: 'discount',
    size: 220,
  }),
  columnHelper.accessor('unit', {
    header: 'unit',
    size: 220,
  }),
  columnHelper.accessor('price', {
    header: 'price',
    size: 220,
  }),
  columnHelper.accessor('rackNumber', {
    header: 'rackNumber',
    size: 220,
  }),
  columnHelper.accessor('description', {
    header: 'description',
    size: 220,
  }),
  columnHelper.accessor('openStock', {
    header: 'openStock',
    size: 220,
  }),
  columnHelper.accessor('reorderLevel', {
    header: 'reorderLevel',
    size: 220,
  }),
];

const csvConfig = mkConfig({
  fieldSeparator: ',',
  decimalSeparator: '.',
  useKeysAsHeaders: true,
});

const Example = () => {
  const handleExportRows = (rows) => {
    const rowData = rows.map((row) => row.original);
    const csv = generateCsv(csvConfig)(rowData);
    download(csvConfig)(csv);
  };

  const handleExportData = () => {
    const csv = generateCsv(csvConfig)(data);
    download(csvConfig)(csv);
  };

  const table = useMaterialReactTable({
    columns,
    data,
    enableRowSelection: true,
    columnFilterDisplayMode: 'popover',
    paginationDisplayMode: 'pages',
    positionToolbarAlertBanner: 'bottom',
    renderTopToolbarCustomActions: ({ table }) => (
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          padding: '8px',
          flexWrap: 'wrap',
        }}
      >
        <Button
          onClick={handleExportData}
          startIcon={<FileDownloadIcon />}
        >
          Export All Data
        </Button>
        <Button
          disabled={table.getPrePaginationRowModel().rows.length === 0}
          onClick={() =>
            handleExportRows(table.getPrePaginationRowModel().rows)
          }
          startIcon={<FileDownloadIcon />}
        >
          Export All Rows
        </Button>
        <Button
          disabled={table.getRowModel().rows.length === 0}
          onClick={() => handleExportRows(table.getRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Page Rows
        </Button>
        <Button
          disabled={
            !table.getIsSomeRowsSelected() && !table.getIsAllRowsSelected()
          }
          onClick={() => handleExportRows(table.getSelectedRowModel().rows)}
          startIcon={<FileDownloadIcon />}
        >
          Export Selected Rows
        </Button>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
};

export default Example;
