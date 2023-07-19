const categoryColumns = {
  video_cards: 'full_name,brand,name,uid,model,gpu_spec_ref,gpu_spec(*),boost_clock_mhz,min_price',
  processors: 'full_name,socket,uid,cores,threads,integrated_gpu,min_price,tdp_w',
  motherboards: 'full_name,socket,formfactor,memory_capacity_gb,ram_slots,uid,min_price',
  power_supply: 'full_name,link,min_price,vendor_id',
  memory: 'full_name,link,min_price,vendor_id',
  storage: 'full_name,link,min_price,vendor_id',
  chassis: 'full_name,link,min_price,vendor_id',
  cpu_cooler: 'full_name,link,min_price,vendor_id',
};

export default categoryColumns