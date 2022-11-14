package com.cis634projectgroup7.PowerManagementSystem.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cis634projectgroup7.PowerManagementSystem.model.Bill;
import com.cis634projectgroup7.PowerManagementSystem.repository.BillRepository;
import com.cis634projectgroup7.PowerManagementSystem.repository.UserRepository;

@Service
public class BillServiceImpl implements BillService {

	@Autowired
	private BillRepository billRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	public List<Bill> getAllBills() {
		return billRepository.findAll();
	}

	@Override
	public Bill get(Integer id) {
		return billRepository.findById(id).get();
	}

	@Override
	public Bill saveBill(Bill bill) {
		return billRepository.save(bill);
	}

	@Override
	public Bill updateBill(Bill bill, Integer id) {
		Bill existingBill = billRepository.findById(id).get();
		existingBill.setBill_Date(bill.getBill_Date());
		existingBill.setDue_Date(bill.getDue_Date());
		existingBill.setAmount(bill.getAmount());
		existingBill.setUnits(bill.getUnits());
		existingBill.setStatus(bill.getStatus());
		billRepository.save(existingBill);
		return existingBill;
	}

	@Override
	public Boolean deleteBill(Integer id) {
		billRepository.deleteById(id);
		return true;
	}

	@Override
	public List<Bill> findByUserId(Integer user_Id) {
		if(userRepository.existsById(user_Id) == true)
		{
			List<Bill> bills = billRepository.findByUserId(user_Id);
			return bills;
		}
		else
		{
			return null;
		}
	}
}
