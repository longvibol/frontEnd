package com.piseth.java.school.phoneshopenight.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.piseth.java.school.phoneshopenight.dto.ProductReportDTO;
import com.piseth.java.school.phoneshopenight.dto.ProductSoldDTO;
import com.piseth.java.school.phoneshopenight.dto.report.ExpenseReportDTO;
import com.piseth.java.school.phoneshopenight.projection.ProductSold;
import com.piseth.java.school.phoneshopenight.service.ReportService;

import lombok.RequiredArgsConstructor;


@RequiredArgsConstructor
@RestController
@RequestMapping("reports/")
public class ReportController {
	
	private final ReportService reportService;
	
	@GetMapping("{startDate}/{endDate}")
	public ResponseEntity<?> prodcutSale(@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable("startDate") LocalDate startDate,
			@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable("endDate") LocalDate endDate){
		
		List<ProductSold> productSolds = reportService.getProductSold(startDate,endDate);
		
		return ResponseEntity.ok(productSolds);
	}
	
	@GetMapping("v2/{startDate}/{endDate}")
	public ResponseEntity<?> prodcutSaleV2(@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable("startDate") LocalDate startDate,
			@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable("endDate") LocalDate endDate){
		
		List<ProductReportDTO> productSolds = reportService.getProductReport(startDate,endDate);

		return ResponseEntity.ok(productSolds);
	}
	
	@GetMapping("/expend/{startDate}/{endDate}")
	public ResponseEntity<?> expenseReport(@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable("startDate") LocalDate startDate,
			@DateTimeFormat(pattern = "yyyy-MM-dd") @PathVariable("endDate") LocalDate endDate){
		
		//List<ProductReportDTO> productSolds = reportService.getProductReport(startDate,endDate);
		
		List<ExpenseReportDTO> expenseReportDTOs = reportService.getExpenseReport(startDate, endDate);

		return ResponseEntity.ok(expenseReportDTOs);
	}
}
