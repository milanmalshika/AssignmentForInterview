package com.example.CrudSpringBoot.BankAccount;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BackAccountRepository extends JpaRepository<BankAccount,String> {
}
