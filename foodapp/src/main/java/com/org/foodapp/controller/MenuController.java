package com.org.foodapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.org.foodapp.dto.Menu;
import com.org.foodapp.service.MenuService;
import com.org.foodapp.util.ResponseStructure;

@RestController
@CrossOrigin
public class MenuController {
	
	@Autowired
	MenuService menuService;
	
	@PostMapping("/menu/{userId}")
	public ResponseEntity<ResponseStructure<Menu>> saveMenu(@RequestBody Menu menu, @PathVariable int userId){
		return menuService.saveMenu(menu, userId);
	}
	@GetMapping("/menu/manager/{managerId}")
	public ResponseEntity<ResponseStructure<Menu>> getMenuByManagerId(@PathVariable int managerId){
		return menuService.getMenuByManagerId(managerId);
	}
	@DeleteMapping("/menu/{menuId}")
	public ResponseEntity<ResponseStructure<String>> deleteMenu(@PathVariable int menuId){
		return menuService.deleteMenu(menuId);
	}
	
	@PostMapping("/updatemenu/{id}")
//	public ResponseEntity<ResponseStructure<Menu>> update(@RequestBody Menu menu,@PathVariable int id)
//	{
//		return menuService.update(menu,id);
//		
//	}
	
	@GetMapping("/getallmenu")
	public ResponseEntity<ResponseStructure<List<Menu>>> getall()
	{
		return menuService.getall();
	}

}
