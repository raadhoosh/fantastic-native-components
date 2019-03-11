package hu.accedo.commons.tools;

import android.database.DataSetObserver;
import android.view.View;
import android.view.ViewGroup;
import android.widget.Adapter;
import android.widget.BaseAdapter;

/**
 * @author Pásztor Tibor Viktor <tibor.pasztor@accedo.tv>
 */
@Deprecated
public class AdapterLooper extends BaseAdapter {
	private BaseAdapter adapter;
	private int loopSize;

	public Adapter getWrappedAdapter() {
		return adapter;
	}
	
	public int getLoopSize() {
		return loopSize;
	}

	public int getCenter() {
		return loopSize/2 * adapter.getCount();
	}
	
	public AdapterLooper(BaseAdapter adapter, int loopSize){
		this.adapter = adapter;
		this.loopSize = loopSize;
	}

	@Override
	public int getCount() {
		return adapter.getCount() * loopSize;
	}

	@Override
	public Object getItem(int position) {
		return adapter.getItem(position % loopSize);
	}

	@Override
	public long getItemId(int position) {
		return adapter.getItemId(position % loopSize);
	}

	@Override
	public View getView(int position, View convertView, ViewGroup parent) {
		return adapter.getView(position % loopSize, convertView, parent);
	}

	@Override
	public boolean areAllItemsEnabled() {
		return adapter.areAllItemsEnabled();
	}

	@Override
	public View getDropDownView(int position, View convertView, ViewGroup parent) {
		return adapter.getDropDownView(position % loopSize, convertView, parent);
	}

	@Override
	public int getItemViewType(int position) {
		return adapter.getItemViewType(position % loopSize);
	}

	@Override
	public int getViewTypeCount() {
		return adapter.getViewTypeCount();
	}

	@Override
	public boolean hasStableIds() {
		return adapter.hasStableIds();
	}

	@Override
	public boolean isEmpty() {
		return adapter.isEmpty();
	}

	@Override
	public boolean isEnabled(int position) {
		return adapter.isEnabled(position % loopSize);
	}

	@Override
	public void notifyDataSetChanged() {
		adapter.notifyDataSetChanged();
	}

	@Override
	public void notifyDataSetInvalidated() {
		adapter.notifyDataSetInvalidated();
	}

	@Override
	public void registerDataSetObserver(DataSetObserver observer) {
		adapter.registerDataSetObserver(observer);
	}

	@Override
	public void unregisterDataSetObserver(DataSetObserver observer) {
		adapter.unregisterDataSetObserver(observer);
	}
}
