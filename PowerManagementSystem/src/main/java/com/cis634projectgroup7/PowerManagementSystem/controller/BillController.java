package com.cis634projectgroup7.PowerManagementSystem.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cis634projectgroup7.PowerManagementSystem.model.Bill;
import com.cis634projectgroup7.PowerManagementSystem.service.BillService;

@RestController
@RequestMapping("/api/v1")
//@CrossOrigin("http://localhost:3000")
public class BillController {
	
	@Autowired
	private BillService billService;
	
	//@PreAuthorize("hasRole('ADMIN')")
	@GetMapping("/bills")
	public List<Bill> getAllBills(){
		return billService.getAllBills();
	}
	
	@GetMapping("/bills/{billId}")
	public ResponseEntity<Bill> getBill(@PathVariable("billId") Integer billId){
		Bill bill = null;
		bill = billService.get(billId);
		return ResponseEntity.ok(bill);
	}
	
	//@PreAuthorize("hasRole('ADMIN')")
	@PostMapping("/bills")
	public Bill saveBill(@RequestBody Bill bill) {
		return billService.saveBill(bill);
	}
	
	@PutMapping("/bills/{billId}")
	public ResponseEntity<Bill> updateBill(@RequestBody Bill bill,@PathVariable("billId") Integer billId) {
		bill = billService.updateBill(bill, billId);
		return ResponseEntity.ok(bill);
	}
	
	@PreAuthorize("hasRole('ADMIN')")
	@DeleteMapping("/bills/{billId}")
	public ResponseEntity<Map<String,Boolean>> deleteBill(@PathVariable("billId") Integer billId){
		Boolean deleted = false;
		deleted = billService.deleteBill(billId);
		Map<String,Boolean> response = new HashMap<>();
		response.put("deleted", deleted);
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/users/{userId}/bills")
	public ResponseEntity<List<Bill>> getAllBillsByUserId(@PathVariable("userId") Integer userId){
		List<Bill> bills = billService.findByUserId(userId);
		return ResponseEntity.ok(bills);
	}
}
