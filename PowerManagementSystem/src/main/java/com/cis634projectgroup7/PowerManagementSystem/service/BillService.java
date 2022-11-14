package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;

import com.cis634projectgroup7.PowerManagementSystem.model.Bill;

public interface BillService {
	public List<Bill> getAllBills();
	public Bill get(Integer id);
	public Bill saveBill(Bill bill);
	public Bill updateBill(Bill bill, Integer id);
	public Boolean deleteBill(Integer id);
	public List<Bill> findByUserId(Integer user_Id);
}
