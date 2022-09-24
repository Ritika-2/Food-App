package com.org.foodapp.dao;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.org.foodapp.dto.Menu;
import com.org.foodapp.dto.User;
import com.org.foodapp.repository.MenuRepository;

import antlr.collections.List;

@Repository
public class MenuDao {
	
	@Autowired
	MenuRepository menuRepository;
	
	public Menu saveMenu(Menu menu) {
		return menuRepository.save(menu);
	}
	

	public void deleteMenu(int menuId) {
		 menuRepository.deleteById(menuId);
	}
	
	public java.util.List<Menu> getall()
	{
		return menuRepository.findAll();
	}
	
	public Menu update(Menu menu, int id)
	{
		menu.setId(id); return menuRepository.save(menu);
		
	}

	
	public Optional<Menu> getMenuById(int id) {
		return menuRepository.findById(id);
	}
	
	public Menu getMenuByManagerId(int managerId) {
		return menuRepository.getMenuByManagerId(managerId);
	}
	

}
